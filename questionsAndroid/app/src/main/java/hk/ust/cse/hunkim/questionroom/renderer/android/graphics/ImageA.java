package hk.ust.cse.hunkim.questionroom.renderer.android.graphics;

import android.graphics.Bitmap;
import android.graphics.Bitmap.Config;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Graphics2DInterface;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.graphics.Image;
import android.graphics.Canvas;

public class ImageA implements Image {
	
	private Bitmap mBitmap;
	
	public ImageA(int width, int height, int type) {
		mBitmap = Bitmap.createBitmap(width, height, Config.ARGB_8888);
	}

	public int getWidth() {
		return mBitmap.getWidth();
	}

	public int getHeight() {
		return mBitmap.getWidth();
	}

	public Graphics2DInterface createGraphics2D() {
		Canvas canvas = new Canvas(mBitmap);
		Graphics2DA g2 = new Graphics2DA(canvas);
		return g2;
	}

	public Bitmap getBitmap() {
		return mBitmap;
	}
}
