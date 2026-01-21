
export const getMe = (req, res) => {
  if (!req.user) {
    return res.status(401).json({ authenticated: false });
  }

  res.json({
    authenticated: true,
    user: req.user
  });
};

export const logout = (req, res) => {
  req.logout(() => {
    req.session.destroy();
    res.clearCookie("connect.sid");
    res.json({ message: "Logged out successfully" });
  });
};
