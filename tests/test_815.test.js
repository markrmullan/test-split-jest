test('sleep for 627 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 627));
});