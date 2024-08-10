test('sleep for 961 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 961));
});