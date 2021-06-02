# Containers ISO Code (ISO 6346)
4-Digit Container Type & Size according to ISO 6346:1995/Amd 3:2012

## Install
```
npm install isocontainer
```

## Example
```
const isocontainter = require ('isocontainer');

const myContainer = '40G1';

isocontainter.isValid(myContainer); // true
isocontainter.getLengthInMetrics(myContainer); // 12192 mm
isocontainter.getLengthInImperial(myContainer); // 40 ft
isocontainter.getHeightInMetrics(myContainer); // 2438 mm
isocontainter.getHeightInImperial(myContainer); // 8 ft
isocontainter.getWidthInMetrics(myContainer); // 2438 mm
isocontainter.getWidthInImperial(myContainer); // 8 ft
isocontainter.getDesignation(myContainer); // General Purpose Container without Ventilation
isocontainter.getSimpleDesignation(myContainer); // General Purpose
isocontainter.getType(myContainer); // Passive vents at upper part of cargo space
```

