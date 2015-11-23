/* FcscoreBox.java
 * =========================================================================
 * This file is part of the JLaTeXMath Library - http://forge.scilab.org/jlatexmath
 *
 * Copyright (C) 2013 DENIZET Calixte
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

import hk.ust.cse.hunkim.questionroom.renderer.share.platform.geom.Line2D;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.BasicStroke;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Graphics2DInterface;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Stroke;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Transform;

/**
 * A box representing glue.
 */
public class FcscoreBox extends Box {

	private int N;
	private boolean strike;
	private float space;
	private float thickness;

	private Line2D line;

	public FcscoreBox(int N, float h, float thickness, float space, boolean strike) {
		this.N = N;
		this.width = N * (thickness + space) + 2 * space;
		this.height = h;
		this.depth = 0;
		this.strike = strike;
		this.space = space;
		this.thickness = thickness;

		line = geom.createLine2D();
	}

	public void draw(Graphics2DInterface g2, float x, float y) {
		Transform transf = g2.getTransform();
		g2.saveTransformation();
		Stroke oldStroke = g2.getStroke();

		final double sx = transf.getScaleX();
		final double sy = transf.getScaleY();
		double s = 1;
		if (sx == sy) {
			// There are rounding problems due to scale factor: lines could have different
			// spacing...
			// So the increment (space+thickness) is done in using integer.
			s = sx;
			g2.scale(1 / sx, 1 / sy);
		}
		
		g2.setStroke(graphics.createBasicStroke((float) (s * thickness), BasicStroke.CAP_BUTT,
				BasicStroke.JOIN_MITER));
		float th = thickness / 2.f;
		float xx = x + space;
		xx = (float) (xx * s + (space / 2.f) * s);
		final int inc = (int) Math.round((space + thickness) * s);

		for (int i = 0; i < N; i++) {
			line.setLine(xx + th * s, (y - height) * s, xx + th * s, y * s);
			g2.draw(line);
			xx += inc;
		}

		if (strike) {

			line.setLine((x + space) * s, (y - height / 2.f) * s, xx - s * space / 2, (y - height / 2.f) * s);
			g2.draw(line);
		}

		g2.restoreTransformation();
		g2.setStroke(oldStroke);
	}

	public int getLastFontId() {
		return TeXFont.NO_FONT;
	}
}
