package com.br.dream;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DreamController {

    @GetMapping("/me")
    public String index() {

        String setHtml = "<html><body><h1>";
        String[] message = new String[] {
                "<p style=\"color:green\">Name: Ludvig Genehr</p>",
                "<p style=\"color:yellow\"><color=yellow>Nationality: Brazilian</p>",
                "<p style=\"color:blue\">Biggest Dream: Travel to Japan and China one day</p>"
        };

        for (String s: message) {
            setHtml += String.format("%s",s);
        }

        setHtml +="</h1></body></html>";
        return setHtml;
    }

}
