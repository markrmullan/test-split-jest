test('sleep for 17858 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 17858));
});