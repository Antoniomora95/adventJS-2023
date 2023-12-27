// the basic idea here is to transform an array into a binary tree structure
import * as fileSystem from 'fs';

export default function transformTree(arrayParam) {
    function buildNode(array, index) {
        const currentValue = array[index];
        // the validation catch out of bounds scenario
        // also when the value for specific array index is null || undefined
        if (typeof currentValue !== 'number') {
            return null;
        }

        const node = {
            value: currentValue,
        };
        node.left = buildNode(array, index * 2 + 1);
        node.right = buildNode(array, index * 2 + 2);
        return node;
    }
    return JSON.stringify(buildNode(arrayParam, 0), null, 4);
}

const jsonResult = transformTree([3, 1, 0, 8, 12, null, 1], 0);

fileSystem.writeFileSync('test.json', jsonResult, { encoding: 'utf8' });
