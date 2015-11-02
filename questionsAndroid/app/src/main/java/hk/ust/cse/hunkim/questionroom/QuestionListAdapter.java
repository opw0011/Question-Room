package hk.ust.cse.hunkim.questionroom;

import android.app.Activity;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.graphics.PorterDuff;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.text.Html;
import android.util.Base64;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import com.firebase.client.Query;

import java.util.Collections;
import java.util.List;

import hk.ust.cse.hunkim.questionroom.db.DBUtil;
import hk.ust.cse.hunkim.questionroom.question.Question;

/**
 * @author greg
 * @since 6/21/13
 * <p/>
 * This class is an example of how to use FirebaseListAdapter. It uses the <code>Chat</code> class to encapsulate the
 * data for each individual chat message
 */
public class QuestionListAdapter extends FirebaseListAdapter<Question> {

    // The mUsername for this client. We use this to indicate which messages originated from this user
    private String roomName;
    MainActivity activity;
    private String inputEmail;
    private boolean selectPostByEmail;

    public QuestionListAdapter(Query ref, Activity activity, int layout, String roomName) {
        super(ref, Question.class, layout, activity);

        // Must be MainActivity
        assert (activity instanceof MainActivity);

        this.activity = (MainActivity) activity;
    }

    /**
     * Bind an instance of the <code>Chat</code> class to our view. This method is called by <code>FirebaseListAdapter</code>
     * when there is a data change, and we are given an instance of a View that corresponds to the layout that we passed
     * to the constructor, as well as a single <code>Chat</code> instance that represents the current data to bind.
     *
     * @param view     A view instance corresponding to the layout we passed to the constructor.
     * @param question An instance representing the current state of a chat message
     */
    @Override
    protected void populateView(View view, final Question question) {
        DBUtil dbUtil = activity.getDbutil();

        // In "find posts by email" mode,
        // posts with different email attributes will be hidden
        if(selectPostByEmail) {
            if( ! question.getEmail().equals(inputEmail)) {
                view.findViewById(R.id.questionLinearLayout).setVisibility(View.GONE);
                return;
            }
        }

        // Map a Chat object to an entry in our listview
        int echo = question.getEcho();

        if(echo < -15) {
            view.findViewById(R.id.questionLinearLayout).setVisibility(View.GONE);
            return;
        }

        TextView echoText = (TextView) view.findViewById(R.id.echo_count);
        echoText.setText("" + echo);

        ImageButton echoButton = (ImageButton) view.findViewById(R.id.echo);

        echoButton.setTag(question.getKey()); // Set tag for button

        echoButton.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View view) {
                        MainActivity m = (MainActivity) view.getContext();
                        m.popUpLikeDialog(question.getKey());
                    }
                }

        );

        ImageButton shareButton = (ImageButton) view.findViewById(R.id.shareButton);

        shareButton.setTag(question.getKey());

        shareButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                MainActivity m = (MainActivity) view.getContext();
                m.shareQuestion((String) view.getTag());
            }
        });

        String msgString = "";

        question.updateNewQuestion();
        if (question.isNewQuestion()) {
            msgString += "<font color=red>NEW </font>";
        }
        msgString += "<B>" + question.getHead() + "</B>" + question.getDesc();

        //download image
        if(question.getImage()!=null&& !question.getImage().equals(""))
        {
            byte[] data = Base64.decode(question.getImage(), Base64.DEFAULT);
            Bitmap bitmap = BitmapFactory.decodeByteArray(data, 0, data.length);
            ImageView im = (ImageView) view.findViewById(R.id.image);
            im.getLayoutParams().height = 600;
            im.setImageBitmap(bitmap);
        }

        ((TextView) view.findViewById(R.id.head_desc)).setText(Html.fromHtml(msgString));
        view.setOnClickListener(new View.OnClickListener() {
                                    @Override
                                    public void onClick(View view) {
                                        MainActivity m = (MainActivity) view.getContext();
                                        m.popUpLikeDialog(question.getKey());
                                    }
                                }

        );

        // check if we already clicked
        /*boolean clickable = !dbUtil.contains(question.getKey());

        echoButton.setClickable(clickable);
        echoButton.setEnabled(clickable);
        view.setClickable(clickable);


        // http://stackoverflow.com/questions/8743120/how-to-grey-out-a-button
        // grey out our button
        if (clickable) {
            echoButton.getBackground().setColorFilter(null);
        } else {
            echoButton.getBackground().setColorFilter(Color.RED, PorterDuff.Mode.MULTIPLY);
        }*/


        view.setTag(question.getKey());  // store key in the view
    }

    @Override
    protected void sortModels(List<Question> mModels) {
        Collections.sort(mModels, Collections.reverseOrder());
    }

    @Override
    protected void setKey(String key, Question model) {
        model.setKey(key);
    }

    protected void setSelectPostByEmail(boolean value) { selectPostByEmail = value; }

    protected void setInputEmail(String email) { inputEmail = new String(email); }
}
