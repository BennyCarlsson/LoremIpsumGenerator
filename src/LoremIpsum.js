var loremIpsum = require("lorem-ipsum")
export const getLoremIpsumText = n => {
  let output = loremIpsum({
    count: n, // Number of words, sentences, or paragraphs to generate.
    units: "words", // Generate words, sentences, or paragraphs.
    sentenceLowerBound: 5, // Minimum words per sentence.
    sentenceUpperBound: 15, // Maximum words per sentence.
    paragraphLowerBound: 3, // Minimum sentences per paragraph.
    paragraphUpperBound: 7, // Maximum sentences per paragraph.
    format: "html", // Plain text or html
    random: Math.random, // A PRNG function. Uses Math.random by default
    suffix: EOL // The character to insert between paragraphs. Defaults to default EOL for your OS.
  })
  return output
}
// const LoremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, mi interdum elementum hendrerit, mi lacus varius diam, nec pellentesque lorem felis in ex. Duis tincidunt elit vitae nisi gravida bibendum. Aliquam vulputate rhoncus nisl at pretium. Cras ut enim ex. Praesent faucibus felis nibh, eget fringilla augue vulputate sit amet. Curabitur at vestibulum magna, ut vehicula leo. Phasellus ullamcorper mi condimentum erat elementum facilisis. Duis ullamcorper vitae lorem et sagittis. Integer est libero, tempor ut mattis a, lobortis et ipsum. Vivamus eget interdum enim. Maecenas eu neque vel turpis faucibus malesuada eget eget sapien. Curabitur fringilla tristique gravida. Nunc non justo id neque porta pharetra vitae sed arcu. Cras pretium, mi a porta euismod, odio dolor sollicitudin tellus, vitae porta augue nulla et nisl. Fusce gravida ipsum nibh, at pellentesque dui faucibus vitae. Phasellus sit amet justo sed nunc rhoncus tempus.

// Aenean at urna varius, aliquet libero tempus, auctor eros. In ac purus vehicula, suscipit ipsum ac, condimentum metus. Ut tellus libero, molestie vel odio vel, porttitor consectetur ante. Maecenas eu ex gravida, facilisis felis non, tristique leo. Praesent tellus risus, auctor vitae faucibus eu, iaculis dapibus turpis. Vestibulum lorem ex, molestie vel arcu nec, pretium hendrerit quam. Donec fermentum velit nec est egestas dictum. Etiam luctus vehicula enim at suscipit. Nulla tempus diam ac lectus eleifend, egestas scelerisque est placerat.

// In hac habitasse platea dictumst. Nullam vel fermentum odio, vitae placerat magna. Nunc a est a nunc imperdiet egestas. Suspendisse rhoncus ut tellus vel pellentesque. Morbi sit amet.

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium, mi interdum elementum hendrerit, mi lacus varius diam, nec pellentesque lorem felis in ex. Duis tincidunt elit vitae nisi gravida bibendum. Aliquam vulputate rhoncus nisl at pretium. Cras ut enim ex. Praesent faucibus felis nibh, eget fringilla augue vulputate sit amet. Curabitur at vestibulum magna, ut vehicula leo. Phasellus ullamcorper mi condimentum erat elementum facilisis. Duis ullamcorper vitae lorem et sagittis. Integer est libero, tempor ut mattis a, lobortis et ipsum. Vivamus eget interdum enim. Maecenas eu neque vel turpis faucibus malesuada eget eget sapien. Curabitur fringilla tristique gravida. Nunc non justo id neque porta pharetra vitae sed arcu. Cras pretium, mi a porta euismod, odio dolor sollicitudin tellus, vitae porta augue nulla et nisl. Fusce gravida ipsum nibh, at pellentesque dui faucibus vitae. Phasellus sit amet justo sed nunc rhoncus tempus.

// Aenean at urna varius, aliquet libero tempus, auctor eros. In ac purus vehicula, suscipit ipsum ac, condimentum metus. Ut tellus libero, molestie vel odio vel, porttitor consectetur ante. Maecenas eu ex gravida, facilisis felis non, tristique leo. Praesent tellus risus, auctor vitae faucibus eu, iaculis dapibus turpis. Vestibulum lorem ex, molestie vel arcu nec, pretium hendrerit quam. Donec fermentum velit nec est egestas dictum. Etiam luctus vehicula enim at suscipit. Nulla tempus diam ac lectus eleifend, egestas scelerisque est placerat.

// In hac habitasse platea dictumst. Nullam vel fermentum odio, vitae placerat magna. Nunc a est a nunc imperdiet egestas. Suspendisse rhoncus ut tellus vel pellentesque. Morbi sit amet.`

// export const getLoremIpsumText = n => {
//   return LoremIpsumText.slice(0, n)
// }
