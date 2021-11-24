import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import {Typography} from "@mui/material";
import Box from '@mui/material/Box';
import {TextareaAutosize} from "@mui/material";
import * as React from "react";


export default  function DataPreparation() {


    const placeholder = '1\ti\ti\tpronoun\t_\t_\t2\tnsubj\t_\t_\n' +
        '2\tam\tbe\tverb\t_\t_\t0\troot\t_\t_\n' +
        '3\tan\ta\tarticle\t_\t_\t4\tdet\t_\t_\n' +
        '4\texample\texample\tnoun\t_\t_\t2\tobl\tpred\t_\n' +
        '# a comment or a translation could be written here\t\t\t\t\t\t\t\t\t\n'

    return(
        <>
            <Container maxWidth="md" style={{marginTop: '100px'}} >

                <Typography variant="h4" component="h3" gutterBottom={true}>Data preparation</Typography>

                <Typography variant="body1" gutterBottom>
                    The form accepts text in the ConLL-U format
                    (described in detail on the <Link style={{textDecoration: "none"}} href='https://universaldependencies.org/format.html'>official web-site</Link>).
                    However, the tool does not support the FEATS field. <br/>
                    You can use the same format that is required by the <Link style={{textDecoration: "none"}} href='https://arborator.ilpga.fr/q.cgi'>Arborator visualization tool.</Link><br/>
                    In general, the date you paste in the form should be copied from a .txt, .csv/.tsv or .xlsx file
                    with ten tab-separated columns.
                    The columns correspond to the following variables:<br/>

                    <ol>
                        <li><b>Token-id (a number of the token in the sentence).</b></li>
                        <li><b>Token.</b></li>
                        <li>Lemma.</li>
                        <li>Annotation 1 (you can use any type of annotation her, for, example, the one suggested by the official UD documentation, or any other)</li>
                        <li>Annotation 2 (you can use any type of annotation her, for, example, the one suggested by the official UD documentation, or any other)</li>
                        <li>Annotation 3 (you can use any type of annotation her, for, example, the one suggested by the official UD documentation, or any other)</li>
                        <li><b>ID (i. e. number in the sentence) of the parent element.</b></li>
                        <li><b>UD tag.</b></li>
                        <li>Dependency.</li>
                        <li>Translation or any other annotation.</li>
                    </ol>

                    The 4th, 5th and the 6th positions are meant for morphological annotation.
                    You can either follow the official UD standard or come up with yor own annotation.
                    In our example, representing early modern Bulgarian language
                    (taken from the <Link style={{textDecoration: "none"}} href='https://punco.uzh.ch/'> corpus of Pop Punčov zbornik</Link>) the <Link style={{textDecoration: "none"}} href='https://punco.uzh.ch/'>
                    MULTEXT-East annotation</Link> is used on the fourth position and the 5th and 6th ones are left empty.
                    <br/>
                    <b>If you would like to leave any position (except for the key-ones) empty, please mark it the an underscore: _ .</b>
                    Lines starting with the # character and <b>following</b> a sentence are considered as carrying comments, translation or metadata.<br/>

                </Typography>
                <br/>

                <div className='code'>

                                        <TextareaAutosize
                      aria-label="minimum height"
                      minRows={10}
                      maxRows={10}
                      style={{ width: 600 }}
                      placeholder={placeholder}
                    />
                       </div>


            </Container>

        </>

    )
}