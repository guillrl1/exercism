/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Mar 03 2026
 * @desc Doubly Linked List for Train Routes
 * This module implements a doubly linked list where each node represents
 * a train station in a specific route.
 * @module TrainRoute
 */

/**
 * Node class representing a single station in the route.
 */
class Node<T> {
  public prev: Node<T> | null = null;
  public next: Node<T> | null = null;
  constructor(public element: T) {}
}

/**
 * Doubly Linked List implementation for managing train stations.
 */
export class LinkedList<TElement> {
  private head: Node<TElement> | null = null;
  private tail: Node<TElement> | null = null;
  private size: number = 0;

  /**
   * Adds a station to the end of the route.
   * @param {TElement} element - The station identifier.
   */
  public push(element: TElement): void {
    const newNode = new Node(element);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  /**
   * Removes and returns the station at the end of the route.
   * @returns {TElement} The removed station element.
   */
  public pop(): TElement | undefined {
    if (!this.tail) return undefined;
    const element = this.tail.element;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    this.size--;
    return element;
  }

  /**
   * Removes and returns the station at the beginning of the route.
   * @returns {TElement} The removed station element.
   */
  public shift(): TElement | undefined {
    if (!this.head) return undefined;
    const element = this.head.element;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    this.size--;
    return element;
  }

  /**
   * Adds a station to the beginning of the route.
   * @param {TElement} element - The station identifier.
   */
  public unshift(element: TElement): void {
    const newNode = new Node(element);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  /**
   * Removes a specific station from the route, even if it is in the middle.
   * @param {TElement} element - The station identifier to remove.
   */
  public delete(element: TElement): void {
    let current = this.head;
    while (current) {
      if (current.element === element) {
        if (current.prev) current.prev.next = current.next;
        if (current.next) current.next.prev = current.prev;
        if (current === this.head) this.head = current.next;
        if (current === this.tail) this.tail = current.prev;
        this.size--;
        break;
      }
      current = current.next;
    }
  }

  /**
   * Returns the total number of stations in the route.
   * @returns {number} The count of nodes.
   */
  public count(): number {
    return this.size;
  }
}