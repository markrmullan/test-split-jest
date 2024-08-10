test('sleep for 845 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 845));
});