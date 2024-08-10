test('sleep for 675 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 675));
});