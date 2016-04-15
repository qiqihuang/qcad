/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Draw/Hatch/Tests/HatchTest04.js
// Timestamp   : 2011-08-16 15:17:49
// Description : 

include('scripts/Pro/Developer/TestingDashboard/TdbTest.js');

function HatchTest04() {
    TdbTest.call(this, 'scripts/Draw/Hatch/Tests/HatchTest04.js');
}

HatchTest04.prototype = new TdbTest();

HatchTest04.prototype.test00 = function() {
    qDebug('running HatchTest04.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(20, 435), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(20, 435), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Draw/Hatch/Tests/data/contour.dxf');
    this.selectAll();
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Type', 'HatchPattern')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Pattern', 'ANSI33')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Scale',  [ 1.4, 0 ] )");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Angle',  [ 0, 0 ] )");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::HatchButton');
    this.verifyDrawing('HatchTest04_000.dxf');
    this.tearDown();
    qDebug('finished HatchTest04.test00()');
};
