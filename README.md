# Containers ISO Code (ISO 6346)
4-Digit Container Type & Size according to ISO 6346:1995/Amd 3:2012

## Install
```
npm install isocontainer
```

## Example
```
const IsoContainter = require ('isocontainer');

const myCode = new IsoContainter('40G1');

myCode.isValid(); // true
myCode.getLengthInMetrics(); // 12192 mm
myCode.getLengthInImperial(); // 40 ft
myCode.getHeightInMetrics(); // 2438 mm
myCode.getHeightInImperial(); // 8 ft
myCode.getWidthInMetrics(); // 2438mm
myCode.getWidthInImperial(); // 8 ft
myCode.getDesignation(); // General Purpose Container without Ventilation
myCode.getType(); // Passive vents at upper part of cargo space
```

