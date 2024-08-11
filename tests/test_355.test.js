test('sleep for 722 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 722));
});