test('sleep for 838 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 838));
});