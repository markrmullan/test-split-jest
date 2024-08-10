test('sleep for 672 ms', async () => {
  await new Promise(resolve => setTimeout(resolve, 672));
});