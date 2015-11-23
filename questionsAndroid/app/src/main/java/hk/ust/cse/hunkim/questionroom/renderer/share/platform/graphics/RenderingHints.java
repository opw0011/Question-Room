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
package hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics;

public interface RenderingHints {

	public static final int KEY_ANTIALIASING = 1;
	public static final int VALUE_ANTIALIAS_ON = 1;

	public static final int KEY_RENDERING = 2;
	public static final int VALUE_RENDER_QUALITY = 2;

	public static final int KEY_TEXT_ANTIALIASING = 3;
	public static final int VALUE_TEXT_ANTIALIAS_ON = 3;

	public static final int KEY_INTERPOLATION = 4;
	public static final int VALUE_INTERPOLATION_BILINEAR = 4;
	public static final int VALUE_INTERPOLATION_NEAREST_NEIGHBOR = 5;
	public static final int VALUE_INTERPOLATION_BICUBIC = 6;
}
