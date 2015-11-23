package hk.ust.cse.hunkim.questionroom;

import android.content.Context;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.Editable;
import android.text.TextWatcher;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.EditText;
import android.widget.ImageView;

import hk.ust.cse.hunkim.questionroom.renderer.android.FactoryProviderAndroid;
import hk.ust.cse.hunkim.questionroom.renderer.android.LatexAdaptor;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXConstants;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXFormula;
import hk.ust.cse.hunkim.questionroom.renderer.share.TeXIcon;
import hk.ust.cse.hunkim.questionroom.renderer.share.exception.ParseException;
import hk.ust.cse.hunkim.questionroom.renderer.share.platform.FactoryProvider;


public class LatexActivity extends AppCompatActivity {
    private EditText latexInput;
    private ImageView latexPreview;

    private TeXFormula.TeXIconBuilder mTexIconBuilder;
    private TeXIcon mTexIcon;
    private float mSizeScale;

    private TeXFormula mFormula;
    private String mLatexText = "";
    private float mSize = 20;
    private int mStyle = TeXConstants.STYLE_DISPLAY;
    private int mType = TeXFormula.SERIF;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_latex);

        //LatexAdaptor latexAdaptor = new LatexAdaptor(this);
        initLatex();

        latexPreview = (ImageView) findViewById(R.id.latex_preview);

        latexInput = (EditText) findViewById(R.id.latex_input);
        latexInput.addTextChangedListener(new TextWatcher() {
            @Override
            public void beforeTextChanged(CharSequence charSequence, int i, int i1, int i2) {
            }

            @Override
            public void onTextChanged(CharSequence charSequence, int i, int i1, int i2) {
                mLatexText = findViewById(R.id.latex_input).toString();
                ensureTexIconExists();
            }

            @Override
            public void afterTextChanged(Editable editable) {
            }
        });
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_latex, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    protected void initLatex() {
        if (FactoryProvider.INSTANCE == null) {
            FactoryProvider.INSTANCE = new FactoryProviderAndroid(this.getAssets());
        }


    }

    protected void readLatexInput(Context context) {
        mLatexText = findViewById(R.id.latex_input).toString();

        //TODO
    }

    public void ensureTexIconExists() {
        if (mFormula == null) {
            try {
                mFormula = new TeXFormula(mLatexText);
            } catch (ParseException exception) {
                mFormula = TeXFormula.getPartialTeXFormula(mLatexText);
            }
        }

        if (mTexIconBuilder == null) {
            mTexIconBuilder = mFormula.new TeXIconBuilder();
        }
        if (mTexIcon == null) {
            mTexIconBuilder.setSize(mSize * mSizeScale).setStyle(mStyle).setType(mType);
            mTexIcon = mTexIconBuilder.build();
        }

        //TODO
    }
}
