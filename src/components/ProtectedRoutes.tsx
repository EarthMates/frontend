import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../constants";
import { useState, useEffect, ReactNode } from "react";

interface ProtectedRouteProps {
  children?: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const authenticate = async () => {
      try {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
          console.log("[Log] No access token found.");
          await refreshToken();
          return;
        }

        console.log("[Log] Access token found:", token);

        const decoded: any = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        console.log(
          "[Log] Token expiration time:",
          tokenExpiration,
          "Current time:",
          now
        );

        if (tokenExpiration < now) {
          console.log("[Log] Access token expired, attempting to refresh.");
          await refreshToken();
        } else {
          console.log("[Log] Access token valid.");
          setIsAuthorized(true);
        }
      } catch (error) {
        console.error("[Log] Error during authentication:", error);
        setIsAuthorized(false);
      }
    };

    authenticate();
  }, []);

  const refreshToken = async () => {
    try {
      const refreshToken = localStorage.getItem(REFRESH_TOKEN);
      if (!refreshToken) {
        console.log("[Log] No refresh token found.");
        setIsAuthorized(false);
        return;
      }

      console.log("[Log] Refresh token found:", refreshToken);

      const response = await api.post("/api/token/refresh/", {
        refresh: refreshToken,
      });
      if (response.status === 200) {
        localStorage.setItem(ACCESS_TOKEN, response.data.access);
        console.log("[Log] Token refreshed successfully.");
        setIsAuthorized(true);
      } else {
        console.log("[Log] Failed to refresh token.");
        setIsAuthorized(false);
      }
    } catch (error) {
      console.error("[Log] Error refreshing token:", error);
      setIsAuthorized(false);
    }
  };

  if (isAuthorized === null) {
    return <div>Loading...</div>;
  }

  return isAuthorized ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
