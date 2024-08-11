test('sleep for 890 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 890));
});