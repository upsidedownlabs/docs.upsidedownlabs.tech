.. _m2w:

M2W
################

.. youtube:: kM2ivaYuCfE

Overview
********

M2W (Mind to Words) is a free, browser-based assistive communication app for people who cannot speak or move, such as ALS patients. It connects to :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>` over Bluetooth and reads a single blink-detection channel from the forehead. A menu of everyday needs (Food, Help, Outing, Television, Washroom and Water) is navigated entirely with eye blinks, and the app speaks the selected need out loud.

Open the app at `upsidedownlabs.github.io/M2W <https://upsidedownlabs.github.io/M2W/>`__.

Features
********

.. list-table::
   :widths: 25 75
   :header-rows: 1

   * - **Feature**
     - **Description**
   * - **Wireless**
     - Connects to the NPG Lite over Bluetooth Low Energy (BLE).
   * - **Blink-only Control**
     - Double blink to open and move through the menu, triple blink to select. No hands, mouse or keyboard needed.
   * - **6 Need Categories**
     - Food, Help, Outing, Television, Washroom and Water, each with its own spoken audio.
   * - **Spoken Feedback**
     - Plays a sound for the selected need, so the person nearby hears it announced.
   * - **Light and Dark Theme**
     - Switch between light and dark mode.
   * - **Zero Install**
     - Runs entirely in the browser as a static web app. Nothing to download or set up.

Hardware Requirements
**********************

- :ref:`Neuro PlayGround Lite <neuro-play-ground-lite>` (:ref:`Explorer <npg-lite-explorer>`, :ref:`Ninja <npg-lite-ninja>` or :ref:`Beast <npg-lite-beast>` pack), only 1 channel is needed
- BioAmp snap cables and gel electrodes (2 for the signal, plus 1 reference)
- NuPrep skin preparation gel (optional) and alcohol swabs
- USB Type-C cable
- Phone or laptop with Bluetooth

Software Requirements
**********************

- A Chromium-based browser with Web Bluetooth support: **Chrome, Edge, Brave**, etc. On iOS, use a BLE-enabled browser such as **Bluefy**.
- BCI-Blink-BLE firmware flashed on the device, using `NPG-Lite-Flasher-Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ or the :ref:`NPG Lite Flasher <npg-lite-flasher>` desktop app.

Setting up the hardware
***********************

Flashing the firmware
=======================

1. Turn on your NPG Lite using the power switch and make sure the battery is connected correctly.
2. Connect the NPG Lite to your computer with the USB Type-C cable.
3. Open `NPG-Lite-Flasher-Web <https://upsidedownlabs.github.io/NPG-Lite-Flasher-Web/>`_ in a Chromium-based browser, then click **Connect Device**.

.. figure:: ./media/flasher-step1.png
    :align: center
    :class: dark-light
    :alt: NPG Lite Firmware Flasher with the Connect Device button highlighted

    Connect Device

4. Select the USB device named **USB JTAG** and click **Connect**.

.. figure:: ./media/flasher-step2.png
    :align: center
    :class: dark-light
    :alt: Browser serial port popup with USB JTAG/serial debug unit highlighted

    Select the USB JTAG Device

5. Once connected, click **Get from GitHub** to browse the available firmware.

.. figure:: ./media/flasher-step3.png
    :align: center
    :class: dark-light
    :alt: NPG Lite Firmware Flasher connected, with the Get from GitHub button highlighted

    Get From GitHub

6. Select **BCI-Blink-BLE.ino.bin** from the list. This is the blink-detection firmware M2W needs.

.. figure:: ./media/flasher-step4.png
    :align: center
    :class: dark-light
    :alt: Available Firmwares list with BCI-Blink-BLE.ino.bin highlighted

    Select BCI-Blink-BLE.ino.bin

7. Click **Flash Firmware** and wait for it to finish uploading.

.. figure:: ./media/flasher-step5.png
    :align: center
    :class: dark-light
    :alt: BCI-Blink-BLE.ino.bin selected with the Flash Firmware button highlighted

    Flash Firmware

8. Once you see **Flash completed successfully!** in the console, disconnect the USB cable.

.. figure:: ./media/flasher-step6.png
    :align: center
    :class: dark-light
    :alt: Console showing Flash completed successfully

    Flash Completed

Preparing your skin
=====================

Good skin preparation improves electrode contact and gives a much cleaner signal.

1. Clean the areas where the electrodes will go with an alcohol swab or wet wipe.
2. For an even better signal, you can first apply a small amount of NuPrep skin preparation gel and then clean the skin.
3. Let the skin dry before placing the electrodes.

.. tip::

   For more details, see :ref:`Skin Preparation <skin-preparation>` and :ref:`Using Gel Electrodes <using-gel-electrodes>`.

Placing the electrodes
========================

Place the positive electrode (**IN+**, red) on the centre of your forehead, the negative electrode (**IN-**, black) behind one ear, and the reference electrode (**REF**, yellow) behind the other ear.

.. figure:: ./media/eeg-placement.png
    :align: center
    :class: dark-light
    :alt: Electrode placement diagram with IN+ on the forehead, IN- behind one ear, and REF behind the other ear

    Electrode Placement

Connecting the cables
=======================

Connect the cables to Channel 1 on the NPG Lite: red to **A0P**, black to **A0N**, and yellow to **REF**.

Connecting to M2W
*********************

1. Turn on NPG Lite by flipping the switch on it. Make sure it is not connected to a charger.
2. Make sure Bluetooth is enabled on your computer or phone. Do not pair or connect to NPG Lite from your system Bluetooth settings, only connect through the browser.
3. Open `M2W <https://upsidedownlabs.github.io/M2W/>`__ in a Chromium-based browser.

.. figure:: ./media/m2w-step1.png
    :align: center
    :class: dark-light
    :alt: M2W app with the theme toggle, connection status and Connect button at the top right

    Open M2W

4. Click **Connect** at the top right of the app.

.. figure:: ./media/m2w-step2.png
    :align: center
    :class: dark-light
    :alt: Clicking the green Connect button

    Connect

5. Select **ESP32C6_EEG** from the browser's Bluetooth pairing popup and click **Pair**.

.. figure:: ./media/m2w-step3.png
    :align: center
    :class: dark-light
    :alt: Bluetooth pairing popup listing ESP32C6_EEG

    Pair Your NPG Lite

6. Once connected, the status changes to **Connected** and you're ready to use the menu.

.. figure:: ./media/m2w-step4.png
    :align: center
    :class: dark-light
    :alt: M2W app showing Connected status with a Disconnect button

    Connected

Using the menu
******************

The menu is controlled entirely with blinks, detected from the forehead electrode.

.. list-table::
   :widths: 25 25 50
   :header-rows: 1

   * - **Step**
     - **Gesture**
     - **What happens**
   * - **Activate Menu**
     - Double blink
     - Opens the menu and highlights the first option (Food).
   * - **Switch Option**
     - Double blink
     - Moves the highlight to the next option, cycling through Food, Help, Outing, Television, Washroom and Water.
   * - **Select**
     - Triple blink
     - Chooses the highlighted option. The app plays that need's spoken audio out loud and highlights it green until you move to another option or the menu closes.

The menu also shows a **Menu Active** badge next to the connection status while it's open. If the device disconnects, the menu closes automatically.

.. tip::

   While connected, you can also click a tile directly with a mouse or touch to hear its audio, which is useful for testing electrode placement and volume before relying on blinks alone.
