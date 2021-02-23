function HelloController(router) {
  router.get("/api/hello", async (_, res) => {
    res.status(200).send("HELLO RESPONDED");
  });

  return router;
}

export default HelloController;
