<?php

/**
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category   EcomDev
 * @package
 * @copyright  Copyright (c) 2012 EcomDev (http://www.ecomdev.org)
 * @license    http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 * @author     Sergey Gozhedrianov <s.gozhedrianov@ecomdev.org>
 */
/**
 * Created by EcomDev.
 * @author Sergey Gozhedrianov
 */
/* @var $this Montelle_Cms_Model_Resource_Setup */
$this->startSetup();
/** @var $connection Varien_Db_Adapter_Pdo_Mysql */
$connection = $this->getConnection();

$defaultContent = <<<HTML
<ul class="nav nav-pills">
    <li><a href="{{store direct_url="about-magento-demo-store"}}">About Us</a></li>
    <li><a href="{{store direct_url="customer-service"}}">Customer Service</a></li>
    <li class="last privacy"><a href="{{store direct_url="privacy-policy-cookie-restriction-mode"}}">Privacy Policy</a></li>
</ul>
HTML;
$this->installBlocks(array(
    'footer_links' => array(
        'title'   => 'Footer Links',
        'content' => $defaultContent
    )));

$this->endSetup();
