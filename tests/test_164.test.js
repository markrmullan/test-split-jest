test('sleep for 731 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 731));
});