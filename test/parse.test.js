import { describe, expect, it } from '@jest/globals';
import {parse} from '../src/parser';

describe('parser', () => {
  it.only('parses a markdown file', () => {
    const input =`# hello world`;

    const parsed =parse(input);
    console.log('object :>>', parsed);

    expect(parsed).toBe('<h1 id="hello-world">hello world</h1>\n');
  });

  it('parses a markdown file 2', () => {
    const input =`# hello world`;

    const parsed =parse(input);

    expect(parsed).toBe('<h1 id="hello-world">hello world</h1>\n');
  });



});