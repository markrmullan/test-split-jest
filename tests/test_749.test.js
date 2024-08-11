test('sleep for 858 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 858));
});