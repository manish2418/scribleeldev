"use client";

import { useState, useEffect, useCallback } from "react";

export function useWaitlistCount() {
  const [count, setCount] = useState(250);
  const [loading, setLoading] = useState(true);

  const fetchCount = useCallback(async () => {
    try {
      const response = await fetch("/api/waitlist");
      const data = await response.json();
      if (data.count) {
        setCount(data.count);
      }
    } catch (error) {
      console.error("Failed to fetch waitlist count:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  const refreshCount = useCallback(() => {
    fetchCount();
  }, [fetchCount]);

  useEffect(() => {
    const handleWaitlistUpdate = () => {
      refreshCount();
    };

    window.addEventListener("waitlistUpdated", handleWaitlistUpdate);
    return () => {
      window.removeEventListener("waitlistUpdated", handleWaitlistUpdate);
    };
  }, [refreshCount]);

  return { count, loading, refreshCount };
}

