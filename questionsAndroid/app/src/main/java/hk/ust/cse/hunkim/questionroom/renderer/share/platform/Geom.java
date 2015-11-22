/**
 * This file is part of the ReTeX library - https://github.com/himamis/ReTeX
 *
 * Copyright (C) 2015 Balazs Bencze
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or (at
 * your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * General Public License for more details.
 *
 * A copy of the GNU General Public License can be found in the file
 * LICENSE.txt provided with the source distribution of this program (see
 * the META-INF directory in the source jar). This license can also be
 * found on the GNU website at http://www.gnu.org/licenses/gpl.html.
 *
 * If you did not receive a copy of the GNU General Public License along
 * with this program, contact the lead developer, or write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA
 * 02110-1301, USA.
 */
package hk.ust.cse.hunkim.questionroom.renderer.share.platform;

import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.GeomFactory;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.Line2D;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.Point2D;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.Rectangle2D;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.RoundRectangle2D;

public class Geom {

	private final GeomFactory geomFactory;

	public Geom() {
		geomFactory = FactoryProvider.INSTANCE.getGeomFactory();
	}

	public Rectangle2D createRectangle2D(double x, double y, double w, double h) {
		return geomFactory.createRectangle2D(x, y, w, h);
	}

	public Line2D createLine2D() {
		return geomFactory.createLine2D(0, 0, 0, 0);
	}

	public RoundRectangle2D createRoundRectangle2D(double x, double y, double w, double h, double arcw,
			double arch) {
		return geomFactory.createRoundRectangle2D(x, y, w, h, arcw, arch);
	}

	public Point2D createPoint2D(double x, double y) {
		return geomFactory.createPoint2D(x, y);
	}
}
