test('sleep for 193 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 193));
});