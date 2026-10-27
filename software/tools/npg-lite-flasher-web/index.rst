.. _npg-lite-flasher-web:

NPG Lite Flasher Web
#####################

.. youtube:: sKYY074Yg3A

Overview
********

NPG Lite Flasher Web is an open-source, browser-based tool to flash firmware onto the :ref:`Neuro PlayGround (NPG) Lite <neuro-play-ground-lite>` and other ESP32-based boards. There is nothing to install - open `upsidedownlabs.github.io/NPG-Lite-Flasher-Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_, connect your board with a USB cable, choose a firmware and click **Flash Firmware**.

.. figure:: media/npg-lite-flasher-web.png
    :align: center
    :alt: NPG Lite Flasher Web Landing Page

    NPG Lite Flasher Web Landing Page

Features
********

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **No Installation**
     - Runs fully in your browser using the Web Serial API. You don't need the Arduino IDE or any desktop app.
   * - **Default Firmwares**
     - Flash the **BLE** (wireless), **WiFi** or **Serial** (direct USB) build of `Chords <https://github.com/upsidedownlabs/Chords-Arduino-Firmware>`__ with one click. They are always taken from the latest release.
   * - **NPG Lite Projects**
     - Every project from the latest `NPG-Lite-Arduino-Firmware <https://github.com/upsidedownlabs/NPG-Lite-Arduino-Firmware>`__ release, each with a short description. Download one, or all of them at once.
   * - **Your Own Firmware**
     - Add any ``.bin`` file with the **Add Firmware** button or by dragging it onto the page.
   * - **Saved in the Browser**
     - Downloaded and added firmwares are saved in your browser, so they're ready the next time you open the flasher.
   * - **Automatic Flash Address**
     - Merged images are flashed at ``0x0`` and app-only files at ``0x10000``, so you don't have to remember offsets.
   * - **Flash Complete Firmware**
     - Write the bootloader, partition table and app together, for a blank chip or a new partition scheme.
   * - **Console & Progress**
     - See live logs and the flashing progress while the firmware is uploaded.
   * - **Guided Tour**
     - Click **Guide** to get a step-by-step tour of the page.

NPG Lite Flasher Web or NPG Lite Flasher?
=========================================

Both tools upload firmware to the NPG Lite. Use whichever is easier for you:

.. list-table::
   :widths: 30 35 35
   :header-rows: 1

   * -
     - **NPG Lite Flasher Web**
     - :ref:`NPG Lite Flasher <npg-lite-flasher>`
   * - **Runs in**
     - Your browser
     - Desktop app (Windows, macOS, Linux)
   * - **Installation**
     - Not needed
     - Download and install
   * - **Browser needed**
     - Chrome, Edge, Opera or Firefox 151+
     - Not needed (it is a desktop app)
   * - **Best for**
     - Quick flashing on any computer
     - Offline use, or when you don't have a supported browser

Requirements
************

Browser
=======

NPG Lite Flasher Web uses the **Web Serial API**, which works in the latest versions of these desktop browsers:

- **Google Chrome**
- **Microsoft Edge**
- **Opera**
- **Mozilla Firefox** (version 151 or later)

Safari and mobile browsers are not supported.

.. note::

   NPG Lite Flasher Web only needs Web Serial, so it works fully in Firefox 151 or later (the first version with Web Serial). Firefox doesn't support Web Bluetooth or WebUSB, but the flasher doesn't use them.

Hardware
========

- :ref:`Neuro PlayGround (NPG) Lite <neuro-play-ground-lite>` or any ESP32 board.
- A USB Type-C **data** cable (not a charge-only cable).

Setting up the Hardware
***********************

1. Turn ON the NPG Lite using the power switch on the side of the board.
2. Connect the NPG Lite to your laptop using the USB Type-C cable.

Uploading the Firmware
**********************

.. tab-set::

   .. tab-item:: Default Firmware

      Use this to flash the standard **BLE**, **WiFi** or **Serial** firmware.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ in a supported browser.
      2. Click **Connect Device**, select your NPG Lite's port from the list and click **Connect**. The console shows the chip it connected to (for example, ``Connected to ESP32-C6``).
      3. Under **Default firmwares**, select the firmware you need:

         - **BLE** (Wireless): to stream data over Bluetooth, for example to :ref:`Chords-Web <chords-web-npg-lite>`.
         - **WiFi** (Wireless): to stream data over Wi-Fi.
         - **Serial** (Direct USB): to stream data over the USB cable.

      4. Check the selected firmware's name and size under **Flash Firmware**.
      5. Click **Flash Firmware** and wait until it reaches **100%**. Don't unplug the board while flashing.
      6. When the console shows **Flash completed successfully!**, the board restarts with the new firmware.

      .. note::

         The default firmwares are downloaded from the latest `Chords-Arduino-Firmware release <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/releases/latest>`__, so you always get the newest version.

   .. tab-item:: NPG Lite Projects

      Use this to flash one of the ready-made NPG Lite projects.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ and click **Connect Device**.
      2. The **NPG Lite projects** list shows every project from the latest `NPG-Lite-Arduino-Firmware release <https://github.com/upsidedownlabs/NPG-Lite-Arduino-Firmware/releases/latest>`__, with a short description of what it does.
      3. Click a project to download and select it. It is saved in your browser, so you don't need to download it again.

         .. tip::

            Click the download-all icon next to **NPG Lite projects** to save every project at once.

      4. Click **Flash Firmware** and wait until the console shows **Flash completed successfully!**.

      .. note::

         If a download fails, the console shows a link to the release. Download the ``.merged.bin`` file from there and add it using the **Your Own Firmware** steps.

   .. tab-item:: Your Own Firmware

      Use this to flash a ``.bin`` file you compiled yourself.

      1. Open `NPG Lite Flasher Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ and click **Connect Device**.
      2. Click **Add Firmware** and select your ``.bin`` file, or drag the file onto the **Your firmwares** list. It is saved in your browser for future use.
      3. The flash address is set automatically from the file name:

         - Files with ``merged`` in the name (for example, ``NPG-LITE-BLE.ino.merged.bin``) are flashed at ``0x0``. A merged image already has the bootloader, partition table and app in one file.
         - Other files are treated as app-only binaries and flashed at ``0x10000``.

      4. Click **Flash Firmware** and wait until the console shows **Flash completed successfully!**.

      .. tip::

         In Arduino IDE, use ``Sketch > Export Compiled Binary`` to get a ``.ino.merged.bin`` file in the sketch's ``build`` folder. Merged images are the easiest to flash, because they're written as a single file.

      .. warning::

         Only change the flash address under **Advanced Options** if you know the address your file needs. Writing to the wrong address can stop your board from booting. If this happens, flash a merged image at ``0x0`` to fix it.

Merged Images and Flash Complete Firmware
=========================================

ESP32 firmware comes in two forms:

.. list-table::
   :widths: 25 50 25
   :header-rows: 1

   * - **File**
     - **What it contains**
     - **Written to**
   * - ``*.merged.bin``
     - Bootloader, partition table and app in one file
     - ``0x0``
   * - ``*.ino.bin``
     - The app only
     - ``0x10000``

All default firmwares and NPG Lite projects are merged images, so they're flashed as a single file.

If you flash an app-only file, the board keeps its existing bootloader and partition table. That's fine when the firmware already on the board uses the same partition scheme. For a blank chip, or when the partition scheme changes, turn on **Flash Complete Firmware**, click **Choose Files** and select all three files (or click **Add Files** to add them from your computer):

.. list-table::
   :widths: 25 50 25
   :header-rows: 1

   * - **Part**
     - **File from Arduino IDE**
     - **Written to**
   * - Bootloader
     - ``sketch.ino.bootloader.bin``
     - ``0x0``
   * - Partition table
     - ``sketch.ino.partitions.bin``
     - ``0x8000``
   * - App
     - ``sketch.ino.bin``
     - ``0x10000``

The flasher also writes the OTA data (``boot_app0.bin``) at ``0xe000``. Bootloader and partition table files are matched by name, so keep the names that Arduino IDE gives them.

Managing Saved Firmwares
========================

Firmwares you download or add are saved in your browser:

- **NPG Lite projects** you downloaded are marked as saved. Projects that are no longer in the latest release still show up, so you can flash or delete them.
- **Your firmwares** lists the files you added yourself. Click one to select it.
- Click the **Delete** icon next to a firmware to remove it, or **Delete All** to remove all your firmwares at once. Default firmwares can't be deleted.
- Click the **X** under **Flash Firmware** to clear the selection.

Real-Time Visualization
***********************

After flashing, you can see your biopotential signals in real time:

- **BLE or Serial firmware**: Open :ref:`Chords-Web <chords>` and click **BLE** or **Serial** to connect. See :ref:`Connecting over Bluetooth (NPG Lite) <chords-web-npg-lite>`.
- **Python**: Follow the :ref:`Chords-Python documentation <chords-pythons>`.

Troubleshooting
***************

.. dropdown:: My board doesn't appear in the port list
   :icon: alert

   - Make sure the NPG Lite is switched ON.
   - Use a USB **data** cable, not a charge-only cable.
   - Close any other app or browser tab using the port (Arduino IDE Serial Monitor, Chords-Web, NPG Lite Flasher, etc.).
   - **Linux**: Add your user to the serial port group, then log out and log back in.

     .. code-block:: bash

        sudo usermod -aG uucp $USER      # Arch / Manjaro
        sudo usermod -aG dialout $USER   # Ubuntu / Debian

.. dropdown:: Flashing fails or stops in the middle
   :icon: alert

   - Don't unplug the board or close the tab while flashing.
   - Click **Disconnect**, unplug and replug the board, then click **Connect Device** and try again.
   - If the board doesn't connect, put it in boot mode: hold the **BOOT** button, press and release **RESET**, then release **BOOT**. Then click **Connect Device** again.

.. dropdown:: The board doesn't work after flashing
   :icon: alert

   - Press **RESET**, or toggle the power switch OFF and ON to restart the board.
   - Make sure you flashed the right firmware for how you want to connect (BLE, WiFi or Serial).
   - If you flashed a custom file, check that it was flashed at the right address. Flashing a merged image at ``0x0`` fixes most problems.

.. dropdown:: A firmware won't download
   :icon: alert

   - Check your internet connection and reload the page.
   - Download the ``.merged.bin`` file from the `Chords-Arduino-Firmware <https://github.com/upsidedownlabs/Chords-Arduino-Firmware/releases/latest>`__ or `NPG-Lite-Arduino-Firmware <https://github.com/upsidedownlabs/NPG-Lite-Arduino-Firmware/releases/latest>`__ release and add it with **Add Firmware**.

GitHub Repository
*****************

For the source code, issue tracking and contribution guidelines, visit the `NPG Lite Flasher Web GitHub repository <https://github.com/upsidedownlabs/NPG-Lite-Flasher-Web>`_.
