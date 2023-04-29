const sampleMailTemplate = (name = "", message) => `
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="UTF-8" />
        <title>Welcome to Ethervest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta content="Ethervest investment" name="description" />
        <meta name="author" content="Ethervest" />
        <meta name="version" content="1.0.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <!-- Font -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap" rel="stylesheet">
    </head>

    <body class="font-nunito text-base text-black dark:text-white dark:bg-slate-900">

        <!-- Hero Start -->
        <div style="margin-top: 50px;">
            <table cellpadding="0" cellspacing="0" style="font-family: Nunito, sans-serif; font-size: 15px; font-weight: 400; max-width: 600px; border: none; margin: 0 auto; border-radius: 6px; overflow: hidden; background-color: #fff; box-shadow: 0 0 3px rgba(60, 72, 88, 0.15);">
                <thead>
                    <tr style="background-color: #4f46e5; padding: 3px 0; border: none; line-height: 68px; text-align: center; color: #fff; font-size: 24px; letter-spacing: 1px;">
                        <th scope="col"><img style="width: 200px;" src="https://pipsville-bucket.s3.us-west-004.backblazeb2.com/Logo-full-white.svg" alt=""></th>
                    </tr>
                </thead>
    
                <tbody>
                    <tr>
                        <td style="padding: 48px 24px 0; color: #161c2d; font-size: 18px; font-weight: 600;">
                            Welcome to Ethervest, ${name}
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 15px 24px 0; color: #595e64;"> ${message}
                        </td>
                    </tr>
    
                    <tr>
                        <td style="padding: 16px 8px; color: #676d74; background-color: #f8f9fc; text-align: center;">
                            © <script>document.write(new Date().getFullYear())</script> Ethervest. All Rights Reserved.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <!-- Hero End -->
    </body>
</html>
`;

export default sampleMailTemplate;
