const API_URL = "https://fitness-trackerapp-backend-2.onrender.com";

// ✅ Register User
export const register = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to register user");
    }

    return await response.json();
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// ✅ Login User
export const loginUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Invalid email or password");
    }

    return await response.json();
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

// ✅ Get Auth Token
export const getToken = () => localStorage.getItem("token");

// ✅ Get User Profile (Protected Route)
export const getUserProfile = async () => {
  const token = getToken();
  if (!token) throw new Error("No token available");

  try {
    const response = await fetch(`${API_URL}/profile`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch profile");
    }

    return await response.json();
  } catch (error) {
    console.error("Profile fetch error:", error);
    throw error;
  }
};

// ✅ Logout Function
export const logout = () => {
  localStorage.removeItem("token"); // ✅ Clear token
  console.log("User logged out successfully.");
};
