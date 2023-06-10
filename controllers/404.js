exports.get404 = (req, res, next) => {
  /**
   * path => /home/praveen/Desktop/Backup-Win-/developer/WebD/Developer/NodeJS-Ud/
   * (path.join(__dirname, "views", "404.html")) => /home/praveen/Desktop/Backup-Win-/developer/WebD/Developer/NodeJS-Ud/views/404.html
   * res.status(404).sendFile(path.join(__dirname, "views", "404.hbs"));
   */
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
};
