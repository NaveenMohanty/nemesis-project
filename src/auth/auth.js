import { User } from "./userData";

export const signIn = (userName, password) => {
  let user = User.find((u) => userName === u.name);
  if (user) {
    if (user.password === password) {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: user.name,
            role: user.role,
          })
        );
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    return false;
  }
};

export const signOut = (next) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }
  }
  next();
};

export const isAuthenticated = () => {
  if (typeof window == "undefined") {
    return false;
  }
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user"));
  } else {
    return false;
  }
};
