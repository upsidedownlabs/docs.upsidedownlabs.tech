.. _emg-gesture-control-npg-lite-armband:

EMG Gesture Control using NPG Lite Armband
################################################

Overview
********

NeuroStrike is a gesture-controlled game built around a pair of NPG Lite Armbands worn on the forearm. Muscle activity is picked up as EMG, and an Edge Impulse machine learning model classifies distinct hand and arm gestures in real time, mapping each one to a game control such as switching weapons or firing in a top-down shooter.

.. figure:: ./media/neurostrike-overview.jpg
    :align: center
    :class: dark-light
    :alt: Person wearing NPG Lite Armbands on the forearm, playing a gesture-controlled game

    NeuroStrike: EMG gesture control built with the NPG Lite Armband

Hardware Used
****************

- NPG Lite Armband, 3-channel, worn as a pair on the forearm for richer gesture classification
- A PC to run the gesture classifier and the game

How it works
****************

- Each armband picks up EMG activity from the forearm muscles.
- An Edge Impulse model classifies the incoming signal into distinct gestures.
- Each recognised gesture is mapped to a game control, letting the player switch weapons and act without touching a mouse or keyboard.

.. note::

   Ideas we're planning to explore next with this setup:

   - An EMG-controlled RC car
   - An EMG-controlled drone
