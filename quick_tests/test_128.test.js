test('sleep for 726 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 726));
});