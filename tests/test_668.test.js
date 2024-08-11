test('sleep for 25624 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 25624));
});