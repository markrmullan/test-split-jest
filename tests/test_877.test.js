test('sleep for 882 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 882));
});