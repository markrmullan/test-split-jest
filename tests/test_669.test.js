test('sleep for 174 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 174));
});