/**
 * Packages are a collection of procedure and globals to be shared between code.
 * It could be a file, or multiple.
 *
 * If the file starts with `package foobar`, it will belong to that package.
 * Otherwise it will belong to `package main`.
 */
export default class Package {
  /**
   * The name of the package.
   */
  public name: string;

  /**
   * The procedures part of the package.
   */
  public procedures: unknown[];

  /**
   * The globals part of the package.
   */
  public globals: unknown[];
}
