test('sleep for 610 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 610));
});