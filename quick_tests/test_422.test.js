test('sleep for 422 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 422));
});