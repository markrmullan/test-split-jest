test('sleep for 706 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 706));
});