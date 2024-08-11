test('sleep for 624 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 624));
});