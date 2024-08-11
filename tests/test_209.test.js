test('sleep for 630 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 630));
});