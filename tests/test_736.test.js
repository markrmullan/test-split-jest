test('sleep for 902 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 902));
});