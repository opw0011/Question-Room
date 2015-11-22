/* FramedBox.java
 * =========================================================================
 * This file is part of the JLaTeXMath Library - http://forge.scilab.org/jlatexmath
 * 
 * Copyright (C) 2009 DENIZET Calixte
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
 * 
 */

package hk.ust.cse.hunkim.questionroom.renderer.share;

import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.Rectangle2D;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.BasicStroke;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Color;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Graphics2DInterface;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Stroke;

/**
 * A box representing a framed box.
 */
public class FramedBox extends Box {

	protected Box box;
	protected float thickness;
	protected float space;
	private Color line;
	private Color bg;

	private Rectangle2D rectangle;

	public FramedBox(Box box, float thickness, float space) {
		this.box = box;
		this.width = box.width + 2 * thickness + 2 * space;
		this.height = box.height + thickness + space;
		this.depth = box.depth + thickness + space;
		this.shift = box.shift;
		this.thickness = thickness;
		this.space = space;

		rectangle = geom.createRectangle2D(0, 0, 0, 0);
	}

	public FramedBox(Box box, float thickness, float space, Color line, Color bg) {
		this(box, thickness, space);
		this.line = line;
		this.bg = bg;
	}

	public void draw(Graphics2DInterface g2, float x, float y) {
		Stroke st = g2.getStroke();
		g2.setStroke(graphics.createBasicStroke(thickness, BasicStroke.CAP_BUTT, BasicStroke.JOIN_MITER));
		float th = thickness / 2;
		if (bg != null) {
			Color prev = g2.getColor();
			g2.setColor(bg);
			rectangle.setRectangle(x + th, y - height + th, width - thickness, height + depth - thickness);
			g2.fill(rectangle);
			g2.setColor(prev);
		}
		if (line != null) {
			Color prev = g2.getColor();
			g2.setColor(line);
			rectangle.setRectangle(x + th, y - height + th, width - thickness, height + depth - thickness);
			g2.draw(rectangle);
			g2.setColor(prev);
		} else {
			rectangle.setRectangle(x + th, y - height + th, width - thickness, height + depth - thickness);
			g2.draw(rectangle);
		}
		// drawDebug(g2, x, y);
		g2.setStroke(st);
		box.draw(g2, x + space + thickness, y);
	}

	public int getLastFontId() {
		return box.getLastFontId();
	}
}
