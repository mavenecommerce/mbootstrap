<?php
$this->startSetup();

$footer_links = <<<HTML
<ul class="links">
    <li><a href="{{store direct_url="about-magento-demo-store"}}">About Us</a></li>
    <li><a href="{{store direct_url="customer-service"}}">Customer Service</a></li>
    <li class="last privacy"><a href="{{store direct_url="privacy-policy-cookie-restriction-mode"}}">Privacy Policy</a></li>
</ul>
HTML;

$this->installBlocks(array(
    "footer_links" => array(
        "title" => "Footer Links",
        "content" => $footer_links
    )
));

$this->endSetup();
