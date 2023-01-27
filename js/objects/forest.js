import {Tree} from "./Tree.js";
import {Quaternion, Vector3} from "three";
import {MidTree} from "./MidTree.js";
import {LongTree} from "./LongTree.js";

const smallTrees = [
    new Tree(new Vector3(10, 0, -7), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(12, 0, -6), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(11, 0, -4), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(10, 0, -2), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(14, 0, 0), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(10, 0, 3), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(12, 0, 5), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(10, 0, 6), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(10, 0, 8), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(16, 0, 9), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(17, 0, 11), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(10, 0, 12), new Quaternion(25, .2, 25.4, 1)),
    new Tree(new Vector3(8, 0, -5.5), new Quaternion(25, .2, 25.4, 1)),
];
const midTrees = [
    new MidTree(new Vector3(12, 0, -6), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(15, 0, -5), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(13, 0, -3), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(11, 0, -2), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(10, 0, 4), new Quaternion(25, .2, 25.4, 1)),
    new MidTree(new Vector3(15, 0, 1), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(13, 0, 2), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(12, 0, 3), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(17, 0, 6), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(5.5, -2, -2), new Quaternion(25, .2, 25.6, 1)),
    new MidTree(new Vector3(5, -2, -3), new Quaternion(25, .2, 25.6, 1)),
];
const longTrees = [
    new LongTree(new Vector3(17, 0, -7), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(10, 0, -6), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(18, 0, -4), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(15, 0, -3), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(11, 0, 2), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(14, 0, 3), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(12, 0, 4), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(13, 0, 5), new Quaternion(25, .2, 25.6, 1)),
    new LongTree(new Vector3(6, -1, 7), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(5, -1, 8), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(7, -1, 5), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(15, 0, 8), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(12, 0, 10), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(15, 0, 11), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(6, -2, -4), new Quaternion(25, 0, 25.4, 1)),
    new LongTree(new Vector3(6.5, -2, -5), new Quaternion(25, 0, 25.4, 1)),
];

export const forest = [
    ...smallTrees,
    ...midTrees,
    ...longTrees
];